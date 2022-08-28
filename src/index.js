// TODO OBJECT
/**
 * Todo: 할 일, 해야하는 일
 *
 * @typedef {object} Todo
 * @property {number} id todo 아이디 id
 * @property {string} content 내용
 * @property {boolean} completed 완료 여부
 * @property {string} category 카테고리  // 이것도 카테고리 목록을 union type 으로 만들던가 해야할 듯
 * @property {string[]} [tags] 태그들
 */
const Todo = {
};

// CREATE
/**
 * createTodo: Todo item 을 새로 생성한다.
 *
 * @param {string} content 내용
 * @param {string} category 카테고리
 * @param {string[]} [tags] 태그들
 *
 * @return { boolean } create 성공 여부
 */
const createTodo = (content, category, tags) => {
  // TODO: add logic to create todo
  // if there is no content, create fail
};

// READ
/**
 * readTodo: 특정 Todo item 을 불러온다.
 *
 * @param { number } id todo id
 *
 * @return { Todo } id 를 통해 찾은 todo 를 반환합니다.
 */
const readTodo = () => {
  // TODO: add logic to read todo
};

// UPDATE
/**
 * updateTodo: 특정 Todo item 의 정보를 업데이트합니다.
 *
 * @param {number} id todo id
 * @param {string} content 내용
 * @param {boolean} completed 완료 여부
 * @param {string} category 카테고리
 * @param {string[]} [tags] 태그들
 *
 * @return { boolean } update 성공 여부
 */
const updateTodo = () => {
  // TODO: add logic to update todo
};

// DELETE
/**
 * deleteTodo: 특정 Todo item 를 삭제합니다.
 *
 * @param { number } id todo id
 *
 * @return { boolean } delete 성공 여부
 */
const deleteTodo = () => {
  // TODO: add logic to delete todo
};
