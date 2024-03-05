import styles from './index.module.css'
import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import TagList from '@/components/TagList';
import { Tag } from '@/libs/microcms';
import SearchField from '@/components/SearchField';

type Props = {
  tags?: Tag[];
};

export default async function SideMenu() {
  const tags = await getTagList({ limit: LIMIT })
  return (
    <div className={styles.side}>
      <SearchField />
      <h3 className={styles.tagTitle}>タグ一覧</h3>
      <TagList tags={tags.contents} />
    </div>
  )
}