/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  assertHTML,
  focusEditor,
  html,
  initialize,
  test,
} from '../utils/index.mjs';

test.describe('NoWrapContentEditable', () => {
  test.beforeEach(({isCollab, page}) =>
    initialize({isCollab, isNoWrap: true, page}),
  );

  test('Can type a single space between characters', async ({
    page,
    isPlainText,
  }) => {
    await focusEditor(page);
    await page.keyboard.type('a a');
    await assertHTML(
      page,
      html`
        <p
          class="PlaygroundEditorTheme__paragraph PlaygroundEditorTheme__ltr"
          dir="ltr">
          <span data-lexical-text="true">a a</span>
        </p>
      `,
    );
  });
});
