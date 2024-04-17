package response

// PageResult 分页查询响应结构体
type PageResult struct {
	PageNum  int         `json:"page_num"`
	PageSize int         `json:"page_size"`
	Total    int         `json:"total"`
	List     interface{} `json:"list"`
}
