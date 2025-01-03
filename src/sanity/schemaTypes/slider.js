export const slider = {
    name: 'slider', 
    title: 'Slider', 
    type: 'document', 
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string', 
      },
      {
        name: 'content',
        title: 'Content',
        type: 'string', 
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', 
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'backgroundColor',
        title: 'Background Color',
        type: 'string',
      },
    ],
  };
  