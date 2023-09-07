<template>
    <div>
      <h2 :class="[statusColor]" class="max-w-[140px] shadow-md uppercase text-center rounded-md py-[7px]">{{ statusName }}</h2>
  
      <ClientOnly>
        <table class="mt-[20px] bg-[#181c23] shadow-md rounded-md w-[100%] overflow-hidden">
          <thead class="text-left border-b-[1px] border-[#455266] text-[#4CCFF1]">
            <th class="py-[15px] px-[15px]">Task name</th>
            <th class="py-[15px] px-[15px]">Type</th>
            <th class="py-[15px] px-[15px]">Deadline</th>
          </thead>
  
          <transition-group name="fade" tag="tbody">
            <tr
              :key="item.id"
              v-for="item in taskList"
              class="cursor-pointer drag-item transition-all duration-[0.3s] hover:bg-[#3294b8]"
              draggable="true"
              @dragstart="$event => onStartDrag($event, item)"
            >
              <td class="py-[25px] px-[15px]">{{ item.taskName }}</td>
              <td class="py-[25px] px-[15px]">
                <div :class="item.taskTypeColor" class="w-[130px] py-[7px] uppercase rounded-md text-center"><span>{{ item.taskType }}</span></div>
              </td>
              <td class="py-[25px] px-[15px]">{{ item.taskDeadline }}</td>
            </tr>
          </transition-group>
        </table>
      </ClientOnly>
    </div>
</template>
  
<script>
  export default {
    name: 'StatusTable',
    props: ['statusName', 'statusColor', 'taskList'],

    computed: {
      dragOptions() {
        return {
          animation: 200,
        };
      },
    },

    methods: {
        onStartDrag(event, item) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemID', item.id);

            event.target.classList.add('dragging');
            this.draggedItemId = item.id
            this.isDragging = true
        },
    },
  };
</script>
  
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>