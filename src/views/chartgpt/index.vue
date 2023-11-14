<template>
    <a-row>
        <a-col :xl="4">
            <a-list item-layout="horizontal" :data-source="data">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-list-item-meta
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team">
                            <template #title>
                                <a href="https://www.antdv.com/">{{ item.title }}</a>
                            </template>
                        </a-list-item-meta>
                    </a-list-item>
                </template>
            </a-list>
        </a-col>
        <a-col :xl="20">
            <a-list v-if="comments.length" :data-source="comments"
                :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`" item-layout="horizontal">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-comment :author="item.author" :avatar="item.avatar" :content="item.content"
                            :datetime="item.datetime" />
                    </a-list-item>
                </template>
            </a-list>
            <a-comment>
                <template #avatar>
                    <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                </template>
                <template #content>
                    <a-form-item>
                        <a-textarea v-model:value="value" :rows="4" />
                    </a-form-item>
                    <a-form-item>
                        <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                            Add Comment
                        </a-button>
                    </a-form-item>
                </template>
            </a-comment>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
import { ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const comments = ref([]);
const submitting = ref(false);
const value = ref('');
const handleSubmit = () => {
    if (!value.value) {
        return;
    }
    submitting.value = true;
    setTimeout(() => {
        submitting.value = false;
        comments.value = [
            {
                author: 'Han Solo',
                avatar: 'https://aliyuncdn.antdv.com/logo.png',
                content: value.value,
                datetime: dayjs().fromNow(),
            },
            ...comments.value,
        ];
        value.value = '';
    }, 1000);
};
</script>

<style scoped></style>