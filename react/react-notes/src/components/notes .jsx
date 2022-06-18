import React, { useState, useEffect } from 'react'
import Note from './Note'
import { db, loadCollection } from '../database'

const Notes = () => {
    const [notes, setNotes] = useState(
        [

        ]
    )
    const destroyEntity = (entity) => {
        // console.log(entity)
        // 加_表示是私有属性
        const _entities = notes.filter(
            item => item.$loki !== entity.$loki
        )
        // console.log(_entities)
        setNotes(_entities)
        loadCollection('notes')
            .then((collection) => {
                collection.remove(entity)
                db.saveDatabase()
            })
    }
    const noteItems = notes.map(
        (note) =>
            <Note
                key={note.$loki}
                entity={note}
                destroyEntity={destroyEntity} />
    )

    const createEntity = (() => {

    })

    // 先把页面模板显示出来， 静态部分先显示出来
    // JSX -> 通过babel转义成html + css渲染   花时间在挂载组件和渲染时间
    // 从数据库取出集合（表）也需要时间  两者无法保证谁先执行完
    // 所以要使用useEffect 生命周期函数来决定执行顺序
    // console.log('|||||||||')
    const getInitialData = () => {
        loadCollection('notes') // 返回的结果是Promise实例可以.then 
            .then((collection) => {
                // console.log(collection)// 拿到数据表操作对象
                // collection.insert([
                //     { body: 'hello' },
                //     { body: '你好' }
                // ])
                const entities = collection.chain()// api
                    .find() // = select * from orderby
                    .simplesort('$loki', 'isdesc') // 排序 以$loki查找 isdesc降序排序
                    .data() //拿到数据
                // console.log(entities)
                setNotes(entities)

            })
    }
    useEffect(() => {
        // 组件挂载后执行  为组件添加生命周期
        // console.log('------')
        getInitialData() // 获取数据库
    }, [])
    return (
        <div className="ui container notes">
            <h4 className="ui horizontal divider header">
                <i className="paw icon" />
                Notes App _ React.js
            </h4>
            <button
                onClick={createEntity}
                className="ui right floated basic violet button">
                添加笔记
            </button>
            <div className="ui divided items">
                {noteItems}
            </div>

        </div>
    )
}

export default Notes;