<template>

  <div class="topbar">
    <div class="white-bg topbar-bg">
      <div class="city-entry">
        <router-link to='/citylist' tag='div'>
           <span>{{city}}</span>
        </router-link>
       
        <i class="city-entry-arrow"></i>
      </div>
      <div class="switch-hot" >
        <router-link to="/moviepage" tag="div">
          <div class="hot-item"  :class=" {'active':isactive}" @click="selected1">正在热映</div>
        </router-link>
        
        <router-link to="/cominglist"  tag="div" @click="this.isactive = false">
           <div class="hot-item" :class=" {'active':!isactive}" @click="selected2"  >即将上映</div>
        </router-link>
       
        
      </div>
      <router-link to="/search">
          <div class="search-entry search-icon" tag= "div"></div>
      </router-link>
    
    </div>
    
  </div>
 
</template>

<script>
export default {
  data(){
    return{
      city:'南昌',
      isactive:true,
    }
  },
    methods:{
      selected1(){
        this.isactive = true;
      },
       selected2(){
        this.isactive = false;
      }
    },
    created(){
      if(this.$route.path === '/cominglist'){
        this.isactive = false
      }else{
        this.isactive = true
      }
    }
}
</script>

<style scoped>
.city-entry-arrow {
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
}
.active {
    color: #ef4238 !important;
    border-bottom: 2px solid #ef4238;
}
.topbar {
    border-bottom: 1px solid #e6e6e6;
    height: 44px;
}
.topbar-bg {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.city-entry .city-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
    max-width: 19.2vw;
}
.city-entry-arrow {
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
}
.switch-hot {
    display: -webkit-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
}
.switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.search-icon {
    width: 20px;
    height: 20px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=') 10px no-repeat;
    background-size: 20px;
    padding: 10px 15px 10px 10px;
}
</style>
