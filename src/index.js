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
 * createTodo:
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
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
 * readTodo:
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 *
 * @param { number } [id] todo id
 *
 * @return { Todo, Todo[] } id 를 통해 찾은 todo 혹은 모든 todos 를 반환합니다.
 */
const readTodo = (id) => {
  // TODO: add logic to read todo
};

// UPDATE
/**
 * updateTodo:
 * id 를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 *
 * @param {number} id todo id
 * @param {string} content 내용
 * @param {boolean} completed 완료 여부
 * @param {string} category 카테고리
 * @param {string[]} [tags] 태그들
 *
 * @return { boolean } update 성공 여부
 */
const updateTodo = (id, content, completed, category, tags) => {
  // TODO: add logic to update todo
};

// DELETE
/**
 * deleteTodo:
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 *
 * @param { number } id todo id
 *
 * @return { boolean } delete 성공 여부
 */
const deleteTodo = (id) => {
  // TODO: add logic to delete todo
};
