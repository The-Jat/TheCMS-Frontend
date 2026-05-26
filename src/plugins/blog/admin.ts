import BlogList from './BlogList';

import {
  registerComponent,
} from '../../runtime/component-registry';

export function registerBlogPlugin() {

  registerComponent(
    'BlogList',
    BlogList
  );

}