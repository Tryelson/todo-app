<template>
    <div class="flex flex-col gap-[60px] pb-[20px]">
        <StatusTable
            statusName="To do"
            statusColor="bg-[#dc811a]"
            :taskList="getList('todo')"
            @drop="$event => onDropDrag($event, 'todo')"
            @dragenter.prevent
            @dragover.prevent
        />

        <StatusTable
            statusName="In Progress"
            statusColor="bg-[#3f75db]"
            :taskList="getList('in progress')"
            @drop="$event => onDropDrag($event, 'in progress')"
            @dragenter.prevent
            @dragover.prevent
        />

        <StatusTable
            statusName="Done"
            statusColor="bg-[#51bb51]"
            :taskList="getList('done')"
            @drop="$event => onDropDrag($event, 'done')"
            @dragenter.prevent
            @dragover.prevent
        />

        <StatusTable
            statusName="Blocked"
            statusColor="bg-[#c1c104]"
            :taskList="getList('blocked')"
            @drop="$event => onDropDrag($event, 'blocked')"
            @dragenter.prevent
            @dragover.prevent
        />
    </div>
</template>

<script>
export default {
  name: "Todo list",
  data() {
    return {
        tasks: [
            {
                id: 0,
                taskName: '1 - Long text task teste',
                taskType: 'Task',
                taskTypeColor: 'bg-[purple]',
                taskDeadline: '01/01/2023',
                status: 'todo'
            },
            {
                id: 1,
                taskName: '2 - Long text task teste',
                taskType: 'Epic',
                taskTypeColor: 'bg-[purple]',
                taskDeadline: '01/01/2023',
                status: 'in progress'
            },
            {
                id: 2,
                taskName: '3 - Long text task teste',
                taskType: 'Story',
                taskTypeColor: 'bg-[gray]',
                taskDeadline: '01/01/2023' ,
                status: 'done'
            },
            {
                id: 3,
                taskName: '4 - Long text task teste',
                taskType: 'Task',
                taskTypeColor: 'bg-[purple]',
                taskDeadline: '01/01/2023',
                status: 'blocked'
            },
            {
                id: 4,
                taskName: '5 - Long text task teste',
                taskType: 'Story',
                taskTypeColor: 'bg-[gray]',
                taskDeadline: '01/01/2023',
                status: 'todo'
            },
            {
                id: 5,
                taskName: '6 - Long text task teste',
                taskType: 'Bug',
                taskTypeColor: 'bg-[red]',
                taskDeadline: '01/01/2023' ,
                status: 'in progress'
            },
        ],
    };
  },
  methods: {
    getList(status){
        return this.tasks.filter(item => item.status === status)
    },

    onDropDrag(event, status){
        const itemID = event.dataTransfer.getData('itemID')
        const item = this.tasks.find(item => item.id == itemID)
        item.status = status
    },
  }
};
</script>