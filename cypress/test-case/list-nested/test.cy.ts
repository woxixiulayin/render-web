import renderTestPage from "../utils"
import json from './json.json'

describe('列表嵌套功能', () => {
  it('列表嵌套，数据能传递到下一级列表，1、2、3、4应该每个格子一个', () => {
    // it函数的回调不能是异步函数，异步函数只能放在cy.then里面
      const page = renderTestPage(json)
      cy.mount(page)

      // 顶级数据 [[1,2],[3,4]]，应该被正确显示到内层列表的每一格
      cy.contains('1').should('be.visible').should('not.contain.text', '2')
      cy.contains('2').should('be.visible').should('not.contain.text', '1')
      cy.contains('3').should('be.visible').should('not.contain.text', '4')
      cy.contains('4').should('be.visible').should('not.contain.text', '3')
      
  })
})