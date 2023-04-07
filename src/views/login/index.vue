<script setup lang="ts">
import { useRouter } from "vue-router";
import { loginRules } from "./utils/rule";
import type { FormInstance } from "element-plus";
import { bg } from "./utils/static";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, reactive, toRaw, onMounted, onBeforeUnmount } from "vue";

import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";

defineOptions({
    name: "Login"
});

const router = useRouter();
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();

const title = "OA-Admin";

const ruleForm = reactive({
    username: "admin",
    password: "admin123"
});

const onLogin = async (formEl: FormInstance | undefined) => {
    loading.value = true;
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        console.log(222);
    });
};

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
    if (code === "Enter") {
        onLogin(ruleFormRef.value);
    }
}

onMounted(() => {
    window.document.addEventListener("keypress", onkeypress);
});

onBeforeUnmount(() => {
    window.document.removeEventListener("keypress", onkeypress);
});
</script>

<template>
    <div class="select-none">
        <img :src="bg" class="wave" />
        <div class="login-container">
            <div class="img"></div>
            <div class="login-box">
                <div class="login-form">
                    <h2 class="outline-none">{{ title }}</h2>

                    <el-form
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="loginRules"
                        size="large"
                    >
                        <el-form-item
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入账号',
                                    trigger: 'blur'
                                }
                            ]"
                            prop="username"
                        >
                            <el-input
                                clearable
                                v-model="ruleForm.username"
                                placeholder="账号"
                                :prefix-icon="useRenderIcon(User)"
                            />
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-input
                                clearable
                                show-password
                                v-model="ruleForm.password"
                                placeholder="密码"
                                :prefix-icon="useRenderIcon(Lock)"
                            />
                        </el-form-item>

                        <el-button
                            class="w-full mt-4"
                            size="default"
                            type="primary"
                            :loading="loading"
                            @click="onLogin(ruleFormRef)"
                        >
                            登录
                        </el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
    padding: 0;
}
</style>
