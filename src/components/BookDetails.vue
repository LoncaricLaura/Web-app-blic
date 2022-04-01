<template>
    <div class="pt-12 ">
       <p class="text-[30px] font-bold "> Book Details</p>
        <div class="grid justify-self-start absolute hover:text-[20px] hover:font-bold mx-12 ">
            <button @click="goBack" class="border-2 border-black rounded-full p-2">Back</button>
        </div>
        <div class="grid">

        </div>

        <div class="grid justify-items-center px-[20px]">
            <div class="grid w-[550px] pt-[50px]">
                <div class="h-[350px] border-2 border-black rounded-2xl">
                    <p class="text-[20px] font-bold py-5">{{ name }}</p>
                    <p>{{ author }}</p>
                 <div class="grid gap-5 py-5">
                    <p><b>ISBN:</b> {{ id }}</p>
                    <p><b>PAGE NUMBER:</b> {{ pageNumber }}</p>
                    <p><b>PUBLISHER:</b> {{ publisher }}</p>
                    <p><b>COUNTRY:</b> {{ country }}</p>
                    <p><b>CHARACTERS NUMBER:</b> {{ characters }}</p>

                </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'BookDetails',
    props: ['id', 'author', 'name', 'pageNumber', 'publisher', 'country', 'characters' ],
    methods: {
        goBack() {
            return this.$router.go(-1);
        }
    }
}
</script>
