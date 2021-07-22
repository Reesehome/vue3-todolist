export interface TodoListItem {
    id: Number,
    type: String;
    title: String;
    finished?: Boolean;
    noticeTime?: Date;
    remark?: String;
    children?: Array<TodoListItem>;
}
