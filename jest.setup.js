import * as vue from 'vue'
import * as pinia from 'pinia'

for (const key of Object.keys(vue)) {
  global[key] = vue[key]
}
for (const key of Object.keys(pinia)) {
  global[key] = pinia[key]
}
