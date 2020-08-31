import { shallowMount } from '@vue/test-utils'
import Component from '../pages/index.vue';

describe('App Mount', () => {
    const wrapper = shallowMount(Component, {
      stubs: ['NuxtLink']
    })

    it('is instantiated', () => {
        expect(wrapper.vm).toBeTruthy();
    });
})