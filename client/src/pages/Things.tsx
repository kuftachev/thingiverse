import React, {Fragment, useState} from 'react'
import {RouteComponentProps} from '@reach/router'
import styled from '@emotion/styled'

import {SearchType} from '../types'
import Selector, {SelectorItem} from '../components/Selector'
import ThingListContainer from '../container/ThingListContainer'
import Input, {InputType} from '../components/Input'

interface ThingsProps extends RouteComponentProps {
}

const selectorItems: SelectorItem[] = [
  {text: 'Newest', value: SearchType.Newest},
  {text: 'Popular', value: SearchType.Popular},
  {text: 'Featured', value: SearchType.Featured},
]

const Things: React.FC<ThingsProps> = () => {
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(6)
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Popular)

  const handleSelectType = (st: SearchType) => setSearchType(st)
  const handleInputPage = (p: string) => setPage(parseInt(p))
  const handleInputPerPage = (pp: string) => setPerPage(parseInt(pp))


  return (
    <Fragment>
      <InputWrapper>
        <Selector label="Search Type" value={searchType} handler={handleSelectType} items={selectorItems}/>
        <Input label="Page" value={page} handler={handleInputPage} type={InputType.Number}/>
        <Input label="Per Page" value={perPage} handler={handleInputPerPage} type={InputType.Number}/>
      </InputWrapper>
      <ThingWrapper>
        <ThingListContainer page={page} perPage={perPage} searchType={searchType}/>
      </ThingWrapper>
    </Fragment>
  )
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`

const ThingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 `

export default Things
