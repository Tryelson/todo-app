<template>
    <main class="w-[100%] pt-[20px]">
        <div class="w-[calc(100%-40px)] mx-[auto]">
            <header class="flex justify-between items-center">
                <button type="button" class="w-[100%] max-w-[190px] py-[10px] shadow-xl bg-[#29A19C] hover:bg-[#33cfca] transition-all duration-200 rounded-lg flex items-center justify-center gap-[10px]">
                    <img src="@/assets/img/plus.svg" alt="Plus Icon">
                    Create new Task
                </button>

                <div class="w-[100%] max-w-[300px] px-[20px] py-[15px] flex items-center gap-[20px]">
                    <div class="">
                        Tryelson Marques
                    </div>
                    
                    <div class="flex items-center gap-[15px]">
                        <div class="w-[50px] h-[50px] border-[2px] border-[#4c5b5a] rounded-[100%] overflow-hidden">
                            <img class="w-[100%] object-cover" src="@/assets/img/profile-pic.png" alt="Profile pic">
                        </div>

                        <button type="button" class="bg-[#4f4f4f] hover:bg-[#5b5b5b] w-[20px] h-[20px] flex items-center justify-center rounded-[100%] pb-[9px]">...</button>
                    </div>
                </div>
            </header>
        </div>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>