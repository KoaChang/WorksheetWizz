import json

with open('info.json') as file:
    info = json.load(file)

with open('info2.txt') as f:
    lines = f.readlines()
    with open ('final.txt','w') as final:
        for line in lines:
            title_index = line.index('title')
            first_brace = line.index('{')
            second_brace = line.index('}',first_brace+1)
            img = line[first_brace+1:second_brace]
            first_quote = line.index("'",title_index)
            second_quote = line.index("'",title_index+7)
            title = line[first_quote+1:second_quote]

            for i in info:
                if i['title'].strip() == title.strip():
                    link = i['link']
                    final.write(f"<File title='{title.strip()}' img={{{img}}} link='{link}' target='_blank' body = 'Download PDF' />")
                    final.write('\n')




