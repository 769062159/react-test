import React, {PureComponent} from 'react'
import request from '../utils/request'

export default class Page2 extends PureComponent{
    state={
        data: {}
    }
    click=()=>{
        request('api/page3').then(data=>{
            this.setState({
                data: data
            })
        })
    }
    render(){
        return (
            <div>
                <h1>Hello Page3!</h1>
                <input type="button" value="获取mcok" onClick={this.click} />
                <div style={{width:300}}>
                    <p>Page3的mock模拟数据为：{JSON.stringify(this.state.data)}</p>
                </div>
            </div>
        )
    }
}
