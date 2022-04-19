<template>
    <div class="search-box">
        <span class="icon-box" :class="iconFold" @click="showBox"><i class="el-icon-search"></i></span>
        <transition name="hello">
            <el-input  v-show="isShow"  placeholder="请输入内容"></el-input>
        </transition>
    </div>
</template>

<script>
export default {
    name:"Search",
    data() {
        return {
            isShow:false
        }
    },
    computed:{
        iconFold(){
            if(this.isShow){
                return "hello-enter-active"
            }else{
                 return "hello-leave-active"
            }
        }
    },
    methods: {
        showBox(){
            this.isShow =!this.isShow
        }
    },
}
</script>

<style>
.search-box{
    /* position: relative;
    top:-20px; */
    display: inline-block;
    overflow: hidden;
}
.el-input{
    width: 200px;
}
.icon-box{

    padding-right:8px ;
}
	.hello-enter-active{
		animation: searchFold 0.5s linear;
	}

	.hello-leave-active{
		animation: searchFold 0.5s linear reverse;
	}
	@keyframes searchFold {
		from{
			transform: translateX(100%);
		}
		to{
			transform: translateX(0px);
		}
	}
    
</style>