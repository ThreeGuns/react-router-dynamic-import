redux thunk作为middleware的固定用法
		添加
执行render的方式有两种
1. setState
2. dispatch-->

    定义reducer

    ```
    export default function(state = {}, action){
        switch (action.type){
            case 'a':
                //TODO 
                return obj;
            default:
                return state;    
        }
    }
    ```
    
    合并reduers

    ```
    ```

    定义container，connect(mapStateToProps, mapDispatchToProps)(component)

    通过react-redux的connect之后的component称之为container，然后container能够被，react-redux提供的Provider包裹在其中，将通过reducers生成的store，供Container使用，这样就能够在connect的时候，定义的mapStateToProps，中的state。以及在mapDispatchToProps中能够dispatch action的时候找到对应的reducer

    ```
    const store = creatStore(reduers[, applyMiddleware(...[redux-thunk])])
    <Provider store={store}>
        <Container/>
    </Provider>
    ```
    
    ```
    ```

    定义component
    
    ```
    ```

###使用thunk步骤，兼顾模块化开发，react-loadable
####引入react-redux, redux, redux-thunk

```
yarn add redux react-redux redux-thunk
```

####划分模块，添加新模块thunk-module，index.js, react-loadable用法
    ```

    ```
    新建container, component, reducer, action
    并分别新建一个各自对应的文件

    完善container, connect state dispatch 到component

    完善component

    完善reducer, 添加reduce方法，

    combineReducers
    
    写一个Root，创建middleware, store, 通过Provider包裹loadableContainer

    回到container完善

    最后写一个loadable为异步模块入口

    完善thunk，reducer，异步dispatch的三种形式
        regeneratorRuntime is not defined
        前端：babel-preset-stage-0
        presets: ['stage-0']
        后端：babel-preset-node6

    关于thunk的应用场景
        thunk类，mysql

    问题
    
    在函数中需要LoadingComponent，需要以标签的形式展现，       
    
    //自动
    thunk(fn){
        return fn;
    }
    thunk(func)();
    ```
    ```

    //两步
    thunk(fn){
        fn();
    }
    thunk(func);

    fn在哪里被执行，就是哪里给fn实参的地方。

    thunk iteral

    公式，传实参给参数fn, callback模式
    需要执行完毕之后传递给我的是一个fn

    fnDo
    fn2(fn){
        fn();
    }
    fn(fn2){
        fn2()(fnDo);
    }

    入口参数

    ```
    
    ```

    当传过来一个fn或者对象，返回一个fn时，需要用到的格式。

    const convert = (fnOrObj) => (dispatch) => {
        
    }

    ()() ===> (())的方式
    function a(){
        return function(){
        }
    }
    a()();

    function convert(fnA){
        return function b(){
            
        }
    }

    第一行可以，第二行不行
    // const temp =  fns[i - 1](fns[i]); fns[i - 1] = () => temp;
        fns[i - 1] = () => fns[i - 1](fns[i]);
    
    oneQuery = 

    具体应用场景下，数据结构的转化

    //数据结构转化
    generator thunk
    btree

    讨论单参数cb情况下
    一般情况下
    fn(cb){
        cb();
    }
    fn()
    
    fn2(cb){
        return () => {
            (()=>{
              return () => {

              }  
            })();
        }
    }
    fn2()();

    如果cb依然是fn2，
    顺序问题
    如何转换同一个方法
    
    多参数cb方法改造为单参数方法
        thunk convert
    单参数方法改造为双箭头函数
        fn3(fn2(fn1()))

    fn1()
        