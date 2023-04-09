<template>
	<div class="w-[100%] absolute h-[100%] top-[0] left-[0] z-[10]">
		<!-- <img class="w-[100%] h-[100%] object-cover" src="@/assets/img/bg.jpg" alt=""> -->
	</div>
</template>

<script>
	export default {
		mounted(){
            this.$router.push('/dashboard')
        }
	}
</script>