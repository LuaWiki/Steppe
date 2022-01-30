<template>
    <div class="edit">
        <div class="edit-content">
            <n-space vertical>
                <div class="edit-content-toolbar">
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="undo">
                                <template #icon>
                                    <n-icon>
                                        <undo-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        撤销
                    </n-tooltip>
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="redo">
                                <template #icon>
                                    <n-icon>
                                        <redo-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        重做
                    </n-tooltip>
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="bold">
                                <template #icon>
                                    <n-icon>
                                        <bold-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        粗体
                    </n-tooltip>
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="italic">
                                <template #icon>
                                    <n-icon>
                                        <italic-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        斜体
                    </n-tooltip>
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="link">
                                <template #icon>
                                    <n-icon>
                                        <link-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        链接
                    </n-tooltip>
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="quote">
                                <template #icon>
                                    <n-icon>
                                        <quotes-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        引用
                    </n-tooltip>
                    <n-tooltip>
                        <template #trigger>
                            <n-button quaternary @click="chem">
                                <template #icon>
                                    <n-icon>
                                        <flask-icon />
                                    </n-icon>
                                </template>
                            </n-button>
                        </template>
                        化学式
                    </n-tooltip>
                </div>
            </n-space>
            <div class="edit-content-editor" ref="editor"></div>
        </div>
    </div>
</template>

<script setup>
import { NSpace, NButton, NTooltip, NIcon } from 'naive-ui'
import { Undo as UndoIcon, Redo as RedoIcon, Bold as BoldIcon, Italic as ItalicIcon, Link as LinkIcon, QuoteLeft as QuotesIcon, Flask as FlaskIcon } from "@vicons/fa"

import { defineComponent } from 'vue';
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { undo as cmUndo, redo as cmRedo } from "@codemirror/history"
import { EditorSelection } from "@codemirror/state"

import { ref, onMounted } from "vue"

const code = ref("");
const editor = ref(null);
let editorView = null;

const undo = () => {
    cmUndo(editorView)
};
const redo = () => {
    cmRedo(editorView)
};
const bold = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "'''" }, { from: range.to, insert: "'''" }],
        range: EditorSelection.range(range.from + 3, range.to + 3)
    })))
};
const italic = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "''" }, { from: range.to, insert: "''" }],
        range: EditorSelection.range(range.from + 2, range.to + 2)
    })))
};
const link = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "[[" }, { from: range.to, insert: "]]" }],
        range: EditorSelection.range(range.from + 2, range.to + 2)
    })))
};
const quote = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "<ref>" }, { from: range.to, insert: "</ref>" }],
        range: EditorSelection.range(range.from + 5, range.to + 5)
    })))
};
const chem = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "<chem>" }, { from: range.to, insert: "</chem>" }],
        range: EditorSelection.range(range.from + 6, range.to + 6)
    })))
};

onMounted(() => {
    editorView = new EditorView({
        state: EditorState.create({
            doc: code.value,
            extensions: [basicSetup],
        }),
        parent: editor.value,
    });
})
</script>

<style scoped>
.edit {
    padding: 100px 3vw;
    padding-bottom: 1vh;
}
.edit-content {
    max-width: 836px;
    margin: 0 auto;
    /*border: 1px solid rgb(239, 239, 245);
    padding: 3vh 3vw;*/
}
.edit-content-toolbar {
    background-color: #fafafa;
}
</style>