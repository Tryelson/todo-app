<template>
    <div class="flex flex-col gap-[60px]">
        <div>
            <h2 class="bg-[#dc811a] max-w-[140px] shadow-md uppercase text-center rounded-md py-[5px]">To do</h2>

            <table class="mt-[20px] bg-[#2C3440] shadow-md rounded-md w-[100%] overflow-hidden">
                <thead class="text-left border-b-[1px] border-[#455266] text-[#29A19C]">
                    <th class="py-[15px] px-[15px]">Task name</th>
                    <th class="py-[15px] px-[15px]">Type</th>
                    <th class="py-[15px] px-[15px]">Deadline</th>
                </thead>
                
                <tbody>
                    <tr class="hover:bg-[#384353] cursor-pointer">
                        <td class="py-[25px] px-[15px]">Long text task name</td>
                        <td class="py-[25px] px-[15px]">Task text type</td>
                        <td class="py-[25px] px-[15px]">01/01/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2 class="bg-[#3f75db] max-w-[140px] shadow-md uppercase text-center rounded-md py-[5px]">In Progress</h2>

            <table class="mt-[20px] bg-[#2C3440] shadow-md rounded-md w-[100%] overflow-hidden">
                <thead class="text-left border-b-[1px] border-[#455266] text-[#29A19C]">
                    <th class="py-[15px] px-[15px]">Task name</th>
                    <th class="py-[15px] px-[15px]">Type</th>
                    <th class="py-[15px] px-[15px]">Deadline</th>
                </thead>
                
                <tbody>
                    <tr class="hover:bg-[#384353] cursor-pointer">
                        <td class="py-[25px] px-[15px]">Long text task name</td>
                        <td class="py-[25px] px-[15px]">Task text type</td>
                        <td class="py-[25px] px-[15px]">01/01/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h2 class="bg-[#51bb51] max-w-[140px] shadow-md uppercase text-center rounded-md py-[5px]">Done</h2>

            <table class="mt-[20px] bg-[#2C3440] shadow-md rounded-md w-[100%] overflow-hidden">
                <thead class="text-left border-b-[1px] border-[#455266] text-[#29A19C]">
                    <th class="py-[15px] px-[15px]">Task name</th>
                    <th class="py-[15px] px-[15px]">Type</th>
                    <th class="py-[15px] px-[15px]">Deadline</th>
                </thead>
                
                <tbody>
                    <tr class="hover:bg-[#384353] cursor-pointer">
                        <td class="py-[25px] px-[15px]">Long text task name</td>
                        <td class="py-[25px] px-[15px]">Task text type</td>
                        <td class="py-[25px] px-[15px]">01/01/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h2 class="bg-[#c1c104] max-w-[140px] shadow-md uppercase text-center rounded-md py-[5px]">Blocked</h2>

            <table class="mt-[20px] bg-[#2C3440] shadow-md rounded-md w-[100%] overflow-hidden">
                <thead class="text-left border-b-[1px] border-[#455266] text-[#29A19C]">
                    <th class="py-[15px] px-[15px]">Task name</th>
                    <th class="py-[15px] px-[15px]">Type</th>
                    <th class="py-[15px] px-[15px]">Deadline</th>
                </thead>
                
                <tbody>
                    <tr class="hover:bg-[#384353] cursor-pointer">
                        <td class="py-[25px] px-[15px]">Long text task name</td>
                        <td class="py-[25px] px-[15px]">Task text type</td>
                        <td class="py-[25px] px-[15px]">01/01/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>