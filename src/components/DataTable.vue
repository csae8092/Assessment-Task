<template>
  <table class="table" id="table">
    <thead>
      <tr>
        <th scope="col">{{ $t('label') }}</th>
        <th scope="col">{{ $t('title') }}</th>
        <th scope="col">{{ $t('author') }}</th>
        <th scope="col">{{ $t('keywords') }}</th>
        <th scope="col">{{ $t('written') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="res in entries" :key="res.legacy_pk">
        <td scope="row">{{ res.display_label }}</td>
        <td scope="row">
          <router-link :to="{ name: 'Detail', params: { id: res.legacy_pk + 1 }}">{{ res.text.title }}</router-link>
        </td>
        <td scope="row">{{ localeAuthors(res.autorLocale).join(", ") }}</td>
        <td scope="row">{{ res.key_word.map(x => x.stichwort).join(", ") }}</td>
        <td scope="row">{{ res.text.start_date || 'unknown' }} - {{ res.text.end_date || 'unknown' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DataTable',
  computed: {
    ...mapGetters([
      'getResults',
    ]),
    entries() {
      console.log('store passage', this.getResults('passage'));
      return this.getResults('passage');
    },
  },
  methods: {
    localeAuthors(arr) {
      return arr ? arr.map(x => x[this.$i18n.locale]) : [];
    },
  },
}
</script>

<style scoped>
  th {
    border-top: 0;
  }
</style>

<i18n>
{
  "en": {
    "label": "Label",
    "title": "Title",
    "author": "Author",
    "keywords": "Associated Keywords",
    "written": "Written",
  },
  "de": {
    "label": "Label",
    "title": "Titel",
    "author": "Autor",
    "keywords": "Stichwörter",
    "written": "Geschrieben",
  }
}
</i18n>
