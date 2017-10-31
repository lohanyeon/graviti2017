<template>
  <div class="wrapper-intro">
    <div class="grid">

      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">G</p>
      </div>
      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">R</p>
      </div>
      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">A</p>
      </div>
      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">V</p>
      </div>
      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">I</p>
      </div>
      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">T</p>
      </div>
      <div class="vertical-grid">
        <p class="hc vc img"><img src="/static/v2017/images/barcode.png" /></p>
        <p class="hc vc txt">I</p>
      </div>
      <div class="visual">
        <p class="hc vc">DIGITAL AGENCY</p>
      </div>

    </div>

  </div>

</template>
<script>
  import $ from 'jQuery'
  // import 'jquery-ui'

  export default {
    name: 'introApp',
    methods: {
      hideMenu: function () {
        $('.gnb-btn').hide()
      },
      typeText: function () {
        var tg = $('.vertical-grid p')
        tg.hide()
        $('.visual').hide()
        var total = tg.length
        var count = 0
        var t = setInterval(function () {
          if (count < total) {
            if (tg.eq(count).hasClass('img')) {
              tg.eq(count).show().delay(200).hide(0)
            } else {
              tg.eq(count).show()
            }
            count++
          } else {
            tg.fadeOut()
          }
        }, 200)

        setTimeout(function () {
          clearInterval(t)
        }, 3000)
      },
      mainVisual: function () {
        setTimeout(function () {
          $('.visual').fadeIn(3000)
        }, 3600)
        setTimeout(function () {
          console.log('go')
          // Router.push('Main')
          // this.$router.push({
          //   path: `/Main`,
          //   query: {}
          // })
          // location.href = '/Main'
        }, 7000)
      }
    },
    created: function () {
    },
    mounted () {
      this.hideMenu()
      this.typeText()
      this.mainVisual()
    }
  }
</script>
<style scoped>
  .grid {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .vertical-grid {
    position: relative;
    display: block;
    width: 14.2%;
    height: 100%;
    float: left;
    background-color: #FFF;
  }

  .vertical-grid::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: #DDD;
  }

  .vertical-grid p {
    position: absolute;
    font-size: 70px;
  }

  .vertical-grid .hc {
    width: 100px;
    left: 0px; right: 0px;
    margin-left: auto; margin-right: auto;
  }

  .vertical-grid .vc {
    height: 100px;
    top: 0px;
    bottom: 0px;
    text-align: center;
    margin-top: auto; margin-bottom: auto;
  }

  .visual {
    position: absolute;
    display: block;
    top: 50%; left: 50%;
    margin: -70px 0 0 -150px;
  }

  .visual p {
    font-size: 30pt;
  }
</style>
