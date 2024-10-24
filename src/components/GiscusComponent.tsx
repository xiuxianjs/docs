import React from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'
export default function GiscusComponent() {
  const { colorMode } = useColorMode()
  const repo = "xiuxianjs/docs"
  const repoId = "R_kgDONFE63w"
  const categoryId = "DIC_kwDONFE6384CjpQK"
  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category="General"
      categoryId={categoryId}
      mapping="url"
      term="Welcome!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  )
}
