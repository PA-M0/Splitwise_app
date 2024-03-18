<script setup>
const props = defineProps(['path'])
const { path } = toRefs(props)

const emit = defineEmits(['update:path', 'upload'])

const supabase = useSupabaseClient()

const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
    try {
        const { data, error } = await supabase.storage.from('avatars').download(path.value)
        if (error) throw error
        src.value = URL.createObjectURL(data)
    } catch (error) {
        console.error('Error downloading image: ', error.message)
    }
}

const uploadAvatar = async (evt) => {
    files.value = evt.target.files
    try {
        uploading.value = true

        if (!files.value || files.value.length === 0) {
            throw new Error('You must select an image to upload.')
        }

        const file = files.value[0]
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`

        const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

        if (uploadError) throw uploadError

        emit('update:path', filePath)
        emit('upload')
    } catch (error) {
        alert(error.message)
    } finally {
        uploading.value = false
    }
}

downloadImage()

watch(path, () => {
    if (path.value) {
        downloadImage()
    }
})
</script>

<template>
    <div>
        <img v-if="src" class="w-24 h-24 ml-2  rounded-full" :src="src" alt="user-image_avatar" style="border-width: 2px; border-style: solid;border-color: green;">

        <!-- <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatar image"
      style="width: 10em; height: 10em;"
    />
    <div v-else class="avatar no-image" :style="{ height: size, width: size }" /> -->
        <div class="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ">
                <path fill-rule="evenodd"
                    d="M1 8a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 8.07 3h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 16.07 6H17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Zm13.5 3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd" />
            </svg>

            <div style="position: relative;">
                <label class="button primary d-inline-block text-sm text-gray-500" for="single">
                    {{ uploading ? 'Uploading ...' : 'Upload' }}
                </label>
                <input style="position: absolute;visibility: hidden ;" type="file" id="single" accept="image/*"
                    @change="uploadAvatar" :disabled="uploading" />
            </div>
        </div>
    </div>
</template>