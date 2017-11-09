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
  // typical import
  // import {TweenMax, Bounce} from 'gsap'
  import {TimelineLite} from 'gsap'

  // or get to the parts that aren't included inside TweenMax (works as of 1.19.1):
  // import Draggable from "gsap/Draggable"
  // import ScrollToPlugin from "gsap/ScrollToPlugin"

  // import 'jquery-ui'

  export default {
    name: 'introApp',
    computed: {
    },
    methods: {
      hideMenu: function () {
        $('.gnb-btn').hide()
        $('.vertical-grid p').hide()
        $('.visual').hide()
      },
      typeText: function () {
        // var top = $('.vertical-grid').height()
        // var time = 1.5
        // $('.vertical-grid').css({top: top * -1})
        // $('.vertical-grid').each(function () {
        //   TweenMax.to($(this), time, {top: 0})
        //   time += 0.2
        // })
        // var leftPx = 800
        // $('.vertical-grid p.txt').each(function () {
        //   var left = $(this).position().left
        //   TweenMax.fromTo($(this), 2
        //     , {left: left - leftPx}
        //     , {left: left, ease: Bounce.easeInOut}
        //   )
        //   leftPx += 1000
        // })
        // var rightPx = 7800
        // $('.vertical-grid p.img').each(function () {
        //   var right = $(this).position().left
        //   TweenMax.fromTo($(this), 1.5
        //     , {left: right + rightPx}
        //     , {left: right, ease: Bounce.easeInOut}
        //   )
        //   rightPx -= 1000
        // })
        var time = 0.2
        var tm = new TimelineLite()
        $('.vertical-grid').each(function () {
          var obj = $(this).children('.txt')
          var objImg = $(this).children('.img')
          $(obj).show()
          $(objImg).show()
          tm.fromTo($(obj), time
            , {scaleX: 30, scaleY: 30}
            , {scaleX: 1, scaleY: 1}
          )
          time += 0.1
        })
      },
      mainVisual: function () {
        // var showVisual = function () {
        //   var visual = $('.visual')
        //   $('.vertical-grid p').hide()
        //   visual.fadeIn()
        //   TweenMax.to(visual, 2, {width: 500})
        // }
        //
        // var goNext = function () {
        //   console.log('go next page')
        // }
        //
        // setTimeout(showVisual, 4000)
        // setTimeout(goNext, 6000)
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
