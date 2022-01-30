<template>
    <div class="edit">
        <div class="edit-content">
            <n-space vertical>
                <div class="edit-content-toolbar">
                    <div class="edit-content-toolbar-group">
                        <n-tooltip>
                            <template #trigger>
                                <n-button quaternary @click="undo" size="large">
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
                                <n-button quaternary @click="redo" size="large">
                                    <template #icon>
                                        <n-icon>
                                            <redo-icon />
                                        </n-icon>
                                    </template>
                                </n-button>
                            </template>
                            重做
                        </n-tooltip>
                    </div>
                    <div class="edit-content-toolbar-group">
                        <n-tooltip>
                            <template #trigger>
                                <n-button quaternary @click="bold" size="large">
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
                                <n-button quaternary @click="italic" size="large">
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
                                <n-button quaternary @click="strikethrough" size="large">
                                    <template #icon>
                                        <n-icon>
                                            <strikethrough-icon />
                                        </n-icon>
                                    </template>
                                </n-button>
                            </template>
                            删除线
                        </n-tooltip>
                        <n-tooltip>
                            <template #trigger>
                                <n-button quaternary @click="code" size="large">
                                    <template #icon>
                                        <n-icon>
                                            <code-icon />
                                        </n-icon>
                                    </template>
                                </n-button>
                            </template>
                            程序代码
                        </n-tooltip>
                    </div>
                    <div class="edit-content-toolbar-group">
                        <n-tooltip>
                            <template #trigger>
                                <n-button quaternary @click="link" size="large">
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
                                <n-button quaternary @click="quote" size="large">
                                    <template #icon>
                                        <n-icon>
                                            <quotes-icon />
                                        </n-icon>
                                    </template>
                                </n-button>
                            </template>
                            引用文献
                        </n-tooltip>
                        <n-tooltip>
                            <template #trigger>
                                <n-button quaternary @click="chem" size="large">
                                    <template #icon>
                                        <n-icon>
                                            <flask-icon />
                                        </n-icon>
                                    </template>
                                </n-button>
                            </template>
                            化学式
                        </n-tooltip>
                        <n-tooltip>
                            <template #trigger>
                                <n-button quaternary @click="math" size="large">
                                    <template #icon>
                                        <n-icon>
                                            <percentage-icon />
                                        </n-icon>
                                    </template>
                                </n-button>
                            </template>
                            数学公式
                        </n-tooltip>
                    </div>
                </div>
            </n-space>
            <div class="edit-content-editor" ref="editor"></div>
        </div>
    </div>
</template>

<script setup>
import { NSpace, NButton, NTooltip, NIcon } from 'naive-ui'
import { Undo as UndoIcon, Redo as RedoIcon, Bold as BoldIcon, Italic as ItalicIcon, Link as LinkIcon, QuoteLeft as QuotesIcon, Flask as FlaskIcon, Strikethrough as StrikethroughIcon, Percentage as PercentageIcon, Code as CodeIcon } from "@vicons/fa"

import { defineComponent } from 'vue';
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { undo as cmUndo, redo as cmRedo } from "@codemirror/history"
import { EditorSelection } from "@codemirror/state"
import { defaultHighlightStyle } from "@codemirror/highlight";
import { html } from "@codemirror/lang-html"

import { ref, onMounted } from "vue"

//const code = ref("");
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
const strikethrough = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "<s>" }, { from: range.to, insert: "</s>" }],
        range: EditorSelection.range(range.from + 3, range.to + 3)
    })))
};
const math = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "<math>" }, { from: range.to, insert: "</math>" }],
        range: EditorSelection.range(range.from + 6, range.to + 6)
    })))
};
const code = () => {
    editorView.dispatch(editorView.state.changeByRange(range => ({
        changes: [{ from: range.from, insert: "<code>" }, { from: range.to, insert: "</code>" }],
        range: EditorSelection.range(range.from + 6, range.to + 6)
    })))
};

onMounted(() => {
    editorView = new EditorView({
        state: EditorState.create({
            //            doc: code.value,
            extensions: [basicSetup, defaultHighlightStyle, html()],
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
.edit-content-toolbar-group {
    display: inline-block;
    border-right: 1px solid #eaecf0;
}
.edit-content-toolbar-group:last-child {
    border-right: 0;
}
</style>