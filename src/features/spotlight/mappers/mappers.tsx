import { Action, TAsset } from '@/features/console'
import {
  ItemCategoryType,
  SearchItem,
  capitalizeString,
  generateUUID
} from '@/features/shared'

function mapAssetToSItem(asset: TAsset): SearchItem<TAsset> {
  return {
    id: generateUUID(),
    name: asset.name.toUpperCase(),
    icon: asset.logo,
    secondaryInfo: `${asset?.balanceOf?.formatted || '0'}`,
    data: { ...asset }
  }
}

function groupActionsByCategory(actions: Action[]): ItemCategoryType<Action>[] {
  return actions
    .reduce((result: ItemCategoryType<Action>[], action: Action) => {
      const { category } = action
      const upperCaseCategory = capitalizeString(category)
      const categoryIndex = result.findIndex(
        (r) => r.categoryTitle === upperCaseCategory
      )

      if (categoryIndex === -1) {
        result.push({
          categoryTitle: upperCaseCategory,
          items: []
        })
      }
      return result
    }, [])
    .filter((result) => result.items.length > 0)
}

export { mapAssetToSItem, groupActionsByCategory }
