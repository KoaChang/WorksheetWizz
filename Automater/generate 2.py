import os
from PIL import Image

dirs = os.listdir('./src')

for dir in dirs:
    if dir != '.DS_Store' and dir != '.idea':
        os.mkdir(f'./Imports2/{dir}')
        folders = os.listdir(f'./src/{dir}')
        for folder in folders:
            if folder != '.DS_Store' and folder != '.idea' and folder != 'Preview':
                with open(f'./Imports2/{dir}/{folder}.txt', 'w') as file:
                    previews = os.listdir(f'./src/{dir}/{folder}/Preview')
                    string = 'import {'
                    for preview in previews:
                        if preview != '.DS_Store' and preview != '.idea':
                            condensed = preview.split('.')[0].replace(' ','')
                            string += condensed + ','

                    string = string[0:len(string)-1]
                    string += '} from "./Preview"'
                    file.write(string)

