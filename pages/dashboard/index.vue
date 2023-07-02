<template>
    <main class="w-[100%] pt-[20px]">
        <div class="w-[calc(100%-40px)] mx-[auto]">
            <header class="flex justify-between items-center">
                <button @click="newTaskModal = true" type="button" class="w-[100%] max-w-[190px] py-[10px] shadow-xl bg-[#29A19C] hover:bg-[#33cfca] transition-all duration-200 rounded-lg flex items-center justify-center gap-[10px]">
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

            <div class="mt-[100px]">
                <TodoList />
            </div>

            <transition>
                <div v-if="newTaskModal">
                    <div @click="newTaskModal = false" class="fixed bg-[#00000068] w-[100%] h-[100%] top-0 left-0 z-20"></div>
    
                    <div class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-[20px] bg-[#2C3440] w-[calc(100%-40px)] max-w-[1200px] z-[30] rounded-xl shadow-lg">
                        <h2 class="px-[20px] mb-[30px] text-[1.875rem]">Criar nova task</h2>
    
                        <form @submit.prevent="($event) => handleCreateNewTask($event)">
                            <div class="w-[calc(100%-40px)] mx-[auto] flex justify-between gap-[20px]">
                                <div class="flex flex-col gap-[10px] w-[100%] max-w-[260px]">
                                    <label for="task-name" class="text-[#29A19C] font-bold text-[1.25rem]">Task name</label>
                                    <input type="text" id="task-name" v-model="task.name" placeholder="Task name" class="bg-[#2C3440] w-[100%] shadow-md py-[5px] px-[7px] rounded-md outline-none border-[1px] border-[#555C65] focus:shadow-[0px_0px_5px_black]">
                                </div>

                                <div class="flex flex-col gap-[10px] w-[100%] max-w-[260px]">
                                    <label for="select-status" class="text-[#29A19C] font-bold text-[1.25rem]">Status</label>

                                    <select v-model="task.status" class="bg-[#2C3440] w-[100%] h-[36px] shadow-md py-[5px] px-[7px] rounded-md outline-none border-[1px] border-[#555C65] focus:shadow-[0px_0px_5px_black]">
                                        <option value="">Select one status</option>
                                        <option value="todo">To Do</option>
                                        <option value="in progress">In Progress</option>
                                        <option value="done">Done</option>
                                        <option value="blocked">Blocked</option>
                                    </select>
                                </div>

                                <div class="flex flex-col gap-[10px] w-[100%] max-w-[260px]">
                                    <label for="task-type" class="text-[#29A19C] font-bold text-[1.25rem]">Task Type</label>

                                    <select v-model="task.type" class="bg-[#2C3440] w-[100%] h-[36px] shadow-md py-[5px] px-[7px] rounded-md outline-none border-[1px] border-[#555C65] focus:shadow-[0px_0px_5px_black]">
                                        <option value="">Select one type</option>
                                        <option value="epic">Epic</option>
                                        <option value="story">Story</option>
                                        <option value="task">Task</option>
                                        <option value="bug">Bug</option>
                                    </select>
                                </div>

                                <div class="flex flex-col gap-[10px] w-[100%] max-w-[260px]">
                                    <label for="deadline" class="text-[#29A19C] font-bold text-[1.25rem]">Deadline</label>

                                    <input type="date" v-model="task.deadline" id="deadline" class="w-[100%] bg-[#2C3440] shadow-md py-[5px] px-[7px] rounded-md outline-none border-[1px] border-[#555C65] focus:shadow-[0px_0px_5px_black]">
                                </div>
                            </div>
    
                            <div class="w-[calc(100%-40px)] mx-[auto] my-[20px] flex flex-col gap-[30px]">    
                                <div class="flex flex-col gap-[10px]">
                                    <label for="description" class="text-[#29A19C] font-bold text-[1.25rem]">Description</label>
                                    <textarea id="description" v-model="task.description" placeholder="Task description" class="h-[200px] bg-[#2C3440] shadow-md py-[5px] px-[7px] rounded-md outline-none border-[1px] border-[#555C65] focus:shadow-[0px_0px_5px_black]"></textarea>
                                </div>
    
                                <div class="flex justify-end gap-[15px]">
                                    <button type="button" @click="newTaskModal = false" class="bg-[#828282] hover:bg-[#8c8c8c] uppercase px-[10px] py-[5px] text-[14px] rounded-[5px]">Cancel</button>
                                    <button type="submit" class="bg-[#29A19C] hover:bg-[#2db1ac] uppercase px-[10px] py-[5px] text-[14px] rounded-[5px]">Create task</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </transition>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                newTaskModal: false,
                task: {
                    name: '',
                    status: '',
                    type: '',
                    description: '',
                    deadline: ''
                },
            }
        },

        methods: {
            handleCreateNewTask(event){
                // execute create task
            }
        },
    }
</script>