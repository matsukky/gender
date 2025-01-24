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

    it('should load french locale', async () => {
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
      const result = gender('MALE', { 
        capitalize: false, 
        args: [], 
        language: 'en' 
      })
      expect(result).toBeTruthy()
      expect(result).toHaveProperty('indirectPronoun')
      expect(result).toHaveProperty('possessiveAdjective')
    })

    it('should capitalize gender data when requested', () => {
      const result = gender('FEMALE', {
        capitalize: true,
        args: [],
        language: 'en'
      })
      expect(result.indirectPronoun[0]).toEqual(result.indirectPronoun[0].toUpperCase())
      expect(result.possessiveAdjective[0]).toEqual(result.possessiveAdjective[0].toUpperCase())
    })

    it('should handle non-existent language', () => {
      const result = gender('MALE', {
        capitalize: false,
        args: [],
        language: 'invalid' as any
      })
      expect(result).toBeTruthy()
      expect(result).toHaveProperty('indirectPronoun')
    })

    it('should handle args properly', () => {
      const result = gender('NEUTRAL', {
        capitalize: false,
        args: ['test'],
        language: 'en'
      })
      expect(result).toBeTruthy()
    })
  })
})