export interface TodoListItem {
    id?: number,
    type?: string;
    title?: string;
    finished?: boolean;
    noticeTime?: date;
    remark?: string;
    children?: TodoListItem[];
}
