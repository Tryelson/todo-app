<template>
    <div>
        <h2 :class="[statusColor]" class="max-w-[140px] shadow-md uppercase text-center rounded-md py-[5px]">{{ statusName }}</h2>

        <ClientOnly>
            <table class="mt-[20px] bg-[#2C3440] shadow-md rounded-md w-[100%] overflow-hidden">
                <thead class="text-left border-b-[1px] border-[#455266] text-[#29A19C]">
                    <th class="py-[15px] px-[15px]">Task name</th>
                    <th class="py-[15px] px-[15px]">Type</th>
                    <th class="py-[15px] px-[15px]">Deadline</th>
                </thead>
            
                <tbody>
                    <tr :key="item.id" v-for="item in taskList" class="hover:bg-[#384353] cursor-pointer" draggable="true" @dragstart="$event => onStartDrag($event, item)">
                        <td class="py-[25px] px-[15px]">{{ item.taskName }}</td>
                        <td class="py-[25px] px-[15px]">
                            <div class="bg-[gray] w-[100%] max-w-[120px] py-[5px] rounded-md text-center"><span>{{ item.taskType }}</span></div>
                        </td>
                        <td class="py-[25px] px-[15px]">{{ item.taskDeadline }}</td>
                    </tr>
                </tbody>
            </table>
        </ClientOnly>
    </div>
</template>

<script>
    export default {
        name: 'StatusTable',
        props: [
            'statusName',
            'statusColor',
            'taskList',
        ],

        methods: {
            onStartDrag(event, item){
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('itemID', item.id)
            },
        },
    }
</script>