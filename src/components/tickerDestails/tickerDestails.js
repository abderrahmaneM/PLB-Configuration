export default {
  name: 'ticker-details',
  components: {},
  props: [],
  data() {
    return {
      ticker: {}
    }
  },
  computed: {},
  mounted() {
    this.getTickerdetails()
  },
  methods: {
    async getTickerdetails() {
      let response = await fetch('https://api.coingecko.com/api/v3/coins/' +
          this.$route.params.id)
      let dataJson = await response.json()
      console.log(dataJson)
      this.ticker = dataJson
    }
  }
}
