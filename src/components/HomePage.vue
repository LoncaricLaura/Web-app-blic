
<template>
  <div class="pt-12">
    <p class="text-black text-[30px] font-bold"> Book list </p>
    <CardBook v-for="book in books" :key="book.isbn" :id="book.isbn" :name="book.name" :author="book.authors" :date="book.released" :pageNumber="book.numberOfPages" :publisher="book.publisher" :country="book.country" :characters="book.characters.length" />
  </div>
</template>

<script>
import axios from 'axios'
import CardBook from '/src/components/CardBook.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      books: [],
    }
  },
  components: {
    CardBook
  },
  mounted() {
    axios.get('https://www.anapioficeandfire.com/api/books')
    .then(response => {
      this.books = response.data;
      console.log(response.data);
    })
  }

}
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
