import Ticker from '@/components/ticker'
export default {
  name: 'tickerlist',
  components: {
    Ticker
  },
  props: [],
  data () {
    return {
      search:'',
      tickers:[]
    }
  },
  computed: {

  },
  mounted () {
    this.getTicker()
  },
  methods: {
    async getTicker(){
      let response=await fetch('https://api.coingecko.com/api/v3/coins/list')
      let dataJson=await response.json()
      console.log(dataJson)
      this.tickers= dataJson
    }
  }
}
