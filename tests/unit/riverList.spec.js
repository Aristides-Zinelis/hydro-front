import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import sinon from 'sinon'
import RiverList from '@/components/RiverList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('RiverList.vue', () => {
  let store
  let actions, mutations

  beforeEach(() => {
    actions = {
      callRivers: sinon.spy()
    }
    mutations = {
      SELECT_RIVER: sinon.spy()
    }
    store = new Vuex.Store({
      getters: {
        getRivers: () => ([
          {
            id: 1,
            name: 'test',
            countrySource: 'source_test',
            length: '10',
            photo: 'test.jpg'
          },
          {
            id: 2,
            name: 'test2',
            countrySource: 'source_test2',
            length: '102',
            photo: 'test2.jpg'
          },
          {
            id: 3,
            name: 'test3',
            countrySource: 'source_test3',
            length: '103',
            photo: 'test3.jpg'
          }
        ])
      },
      actions,
      mutations
    })
  })
  describe('props', () => {
  it('call rivers and has two tables', () => {
    const stubGoUpdate = sinon.spy()
    const stubGoDelete = sinon.spy()
    const wrapper = shallowMount(RiverList, {
      localVue,
      store,
      router
    })
    wrapper.setMethods({
      goUpdate: stubGoUpdate,
      goDelete: stubGoDelete
    })
    expect(actions.callRivers.called).toBe(true)
    expect(actions.callRivers.calledOnce)
    expect(wrapper.findAll('.button').length).toBe(6)
    expect(wrapper.findAll('.button').at(0).trigger('click'))
    expect(stubGoUpdate.called).toBe(true)
    expect(stubGoUpdate.getCall(0).args[0]).toMatchObject({"countrySource": "source_test", "id": 1, "length": "10", "name": "test", "photo": "test.jpg"})
    expect(wrapper.findAll('.button').at(1).trigger('click'))
    expect(stubGoDelete.called).toBe(true)
    expect(stubGoDelete.getCall(0).args[0]).toMatchObject({"countrySource": "source_test", "id": 1, "length": "10", "name": "test", "photo": "test.jpg"})
    })
  })
})
