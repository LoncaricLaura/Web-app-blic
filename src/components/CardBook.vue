<template>
    <div class="grid justify-items-center py-12 px-[30px] ">
        <div class="grid border-2 border-black shadow-2xl rounded-xl w-[400px]">
            <div class="h-[200px] m-4">
                <div class="grid grid-cols-1 justify-items-center gap-5">
                    <router-link :to="{ name: 'BookDetails', params: { id: id, author: author, name: name, pageNumber: pageNumber, publisher: publisher, country:country, characters: characters }}">
                    <div>
                        <p class="text-[20px] font-bold mb-8 hover:text-[25px]">{{ name }}</p>
                    </div>
                    </router-link>
                    <div>
                       <p class="">{{ author }}</p> 
                    </div>
                    <div>
                        {{ date }}
                    </div>
 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardBook',
    props: ["id", "name", "author", "date", "pageNumber", "publisher", "country", "characters"],
}
</script>
