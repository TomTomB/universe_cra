import { Modal } from './Modal';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { ModalProps } from './Modal.types';

export default {
  title: 'UiKit/Overlay/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <div style={{ margin: '1rem', textAlign: 'center' }}>
      <h1>Some Content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero
        sunt quaerat aliquid incidunt commodi iste amet? Ex, fugiat magni. sunt
        quaerat aliquid incidunt commodi iste amet? Ex, fugiat magni.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        necessitatibus cupiditate eius excepturi! Itaque, reprehenderit quae.
        Est exercitationem voluptatibus autem fuga placeat. Beatae laudantium
        voluptatibus dolore esse accusamus deserunt incidunt ullam, provident
        blanditiis, omnis repudiandae fugit, eaque quos officiis rem?
      </p>
    </div>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  position: 'bottom',
  bottomButtons: [
    {
      buttonText: 'Close',
      click: () => {
        // Make linter happy
      },
    },
  ],
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  show: true,
  position: 'bottom',
  topRightCloseButton: {
    variant: 'circle',
    click: () => {
      // Make linter happy
    },
  },
  bottomButtons: [],
};

export const WithToastButton = Template.bind({});
WithToastButton.args = {
  show: true,
  position: 'bottom',
  topRightCloseButton: {
    variant: 'toast',
    click: () => {
      // Make linter happy
    },
  },
  bottomButtons: [],
};

export const WithToastBackgroundButton = Template.bind({});
WithToastBackgroundButton.args = {
  show: true,
  position: 'bottom',
  topRightCloseButton: {
    variant: 'toast',
    toastWithBackground: true,
    click: () => {
      // Make linter happy
    },
  },
  bottomButtons: [],
};

export const WithCaret = Template.bind({});
WithCaret.args = {
  show: true,
  position: 'bottom',
  caret: true,
  bottomButtons: [],
};
