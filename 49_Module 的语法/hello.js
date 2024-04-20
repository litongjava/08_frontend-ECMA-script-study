
export var name = "iwen"
export var age = 20;

// 导出函数
export function hello(){

}

var num = 10
// export 在导出的时候，必须简历一个对应关系
// export num;
// export 100;

export { num }

var sex = "男"

// as:重新起了一个新的名字而已
export {
    sex as sexs
}