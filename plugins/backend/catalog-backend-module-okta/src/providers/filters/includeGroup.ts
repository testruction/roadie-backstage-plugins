/*
 * Copyright 2022 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Group } from '@okta/okta-sdk-nodejs';
import { GroupFilter } from '../../types';
import { get } from 'lodash';
import { filterOperators } from './filterOperators';

export const includeGroup = (
  group: Group,
  groupFilters?: GroupFilter[],
): boolean => {
  return groupFilters
    ? groupFilters.every(filter => {
        const lhs = get(group, filter.key);
        return filterOperators[filter.operator](lhs, filter.value);
      })
    : true;
};
