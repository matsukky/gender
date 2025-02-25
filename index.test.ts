import { describe, it, expect, beforeAll } from '@jest/globals'
import { locale, gender } from '.'
import en from './locale/en'
import fr from './locale/fr'
import jp from './locale/jp'

describe('Gender Module', () => {
  describe('locale()', () => {
    it('should load french locale by default', async () => {
      const genders = await locale()
      expect(genders).toBeTruthy()
      expect(genders).toEqual(fr)
    })

    it('should load japanese locale', async () => {
      const genders = await locale('jp')
      expect(genders).toBeTruthy()
      expect(genders).toEqual(jp)
    })

    it('should handle invalid locale', async () => {
      const genders = await locale('invalid' as any)
      expect(genders).toEqual(en)
    })
  })

  describe('gender()', () => {
    beforeAll(async () => {
      await locale('en')
    })

    it('should return correct gender data', () => {
      const result = gender('MALE')
      expect(result).toBeTruthy()
      expect(result).toHaveProperty('indirectPronoun')
      expect(result).toHaveProperty('possessiveAdjective')
    })

    it('should capitalize gender data when requested', () => {
      const result = gender('FEMALE', { capitalize: true })
      expect(result.indirectPronoun[0]).toEqual(result.indirectPronoun[0].toUpperCase())
      expect(result.possessiveAdjective[0]).toEqual(result.possessiveAdjective[0].toUpperCase())
    })

    it('should handle custom properties', () => {
      const customProps = {
        occupation: {
          F: 'actress',
          M: 'actor',
          X: 'performer'
        },
        greeting: {
          F: 'madame',
          M: 'sir',
          X: 'mx'
        }
      }
      
      const result = gender('FEMALE', { custom: customProps })
      expect(result).toHaveProperty('occupation', 'actress')
      expect(result).toHaveProperty('greeting', 'madame')
    })

    it('should handle custom properties with capitalization', () => {
      const customProps = {
        occupation: {
          F: 'actress',
          M: 'actor',
          X: 'performer'
        }
      }
      
      const result = gender('MALE', { 
        custom: customProps,
        capitalize: true 
      })
      expect(result).toHaveProperty('occupation', 'Actor')
    })

    it('should handle non-existent language', () => {
      const result = gender('MALE', { language: 'invalid' as any })
      expect(result).toBeTruthy()
      expect(result).toHaveProperty('indirectPronoun')
    })

    it('should handle multiple custom properties for each gender', () => {
      const customProps = {
        occupation: {
          F: 'actress',
          M: 'actor',
          X: 'performer'
        },
        greeting: {
          F: 'madame',
          M: 'sir',
          X: 'mx'
        },
        role: {
          F: 'woman',
          M: 'man',
          X: 'person'
        }
      }

      const resultF = gender('FEMALE', { custom: customProps })
      const resultM = gender('MALE', { custom: customProps })
      const resultX = gender('NEUTRAL', { custom: customProps })

      expect(resultF).toHaveProperty('occupation', 'actress')
      expect(resultF).toHaveProperty('greeting', 'madame')
      expect(resultF).toHaveProperty('role', 'woman')

      expect(resultM).toHaveProperty('occupation', 'actor')
      expect(resultM).toHaveProperty('greeting', 'sir')
      expect(resultM).toHaveProperty('role', 'man')

      expect(resultX).toHaveProperty('occupation', 'performer')
      expect(resultX).toHaveProperty('greeting', 'mx')
      expect(resultX).toHaveProperty('role', 'person')
    })
  })
})