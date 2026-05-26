import Page
  from '../../ui/Page';

import Button
  from '../../ui/Button';

import Table
  from '../../ui/Table';

export default function BlogList() {

  const posts = [
    {
      id: 1,
      title:
        'First Post',
      status:
        'Published',
    },
    {
      id: 2,
      title:
        'Second Post',
      status:
        'Draft',
    },
  ];

  return (
    <Page
      title="Posts"
      actions={
        <Button>
          Create Post
        </Button>
      }
    >

      <Table
        columns={[
          {
            key: 'id',
            title: 'ID',
          },
          {
            key: 'title',
            title: 'Title',
          },
          {
            key: 'status',
            title: 'Status',
          },
        ]}
        data={posts}
      />

    </Page>
  );
}