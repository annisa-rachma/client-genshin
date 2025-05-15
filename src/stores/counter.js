// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const server_url = 'http://localhost:3000'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      characters: [],
      charactersTemp: [],
      characterData: null
    }
  },

  actions: {
    async fetchAllChar(element) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${server_url}/characters`
        })

        for (let char of data) {
          if (char.vision == element) {
            this.charactersTemp.push(char)
          }
        }

        this.characters = this.charactersTemp
        this.charactersTemp = []
      } catch (error) {
        console.log(error.response.data.message)
      }
    },

    getMonthName(monthNumber) {
      const date = new Date()
      date.setMonth(monthNumber - 1)

      return date.toLocaleString('en-US', { month: 'long' })
    },
    async fetchById(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${server_url}/characters/${id}`
        })

        let month = this.getMonthName(data.birthday.month)
        let day = data.birthday.day

        if (day == 1 || day == 11 || day == 21 || day == 31) {
          day = `${day}st`
        } else if (day == 2 || day == 12 || day == 22) {
          day = `${day}nd`
        } else if (day == 3 || day == 14 || day == 23) {
          day = `${day}rd`
        } else {
          day = `${day}th`
        }

        data.birthday = `${month} ${day}`
        data.normalAttack.description = data.normalAttack.description.replaceAll('\\n', ' ')
        data.elementalSkill.description = data.elementalSkill.description.replaceAll('\\n', ' ')
        data.elementalBurst.description = data.elementalBurst.description.replaceAll('\\n', ' ')

        this.characterData = data
        // console.log(this.characterData)
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }
})
