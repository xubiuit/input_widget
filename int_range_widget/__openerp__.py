# -*- encoding: utf-8 -*-
##############################################################################
#
#    Int Range Widget
#    Copyright (C) 2016- XUBI.ME (http://www.xubi.me)
#    @author binhnguyenxuan (https://www.linkedin.com/in/binh-nguyen-xuan-46556279)
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#    
##############################################################################
{
    'name': 'Int Range Widget',
    'summary': 'This project aims to create integer range for input',
    'version': '9.0.1.0',
    'category': 'Tools',
    'summary': """
This project aims to create integer range for input
""",
    'author': "binhnguyenxuan (www.xubi.me)",
    'website': 'http://www.xubi.me',
    'license': 'AGPL-3',
    'depends': [
    ],
    'data': [
        'templates/templates.xml',
    ],
    'qweb': [
        "static/src/xml/*.xml",
    ],
    'installable': True,
    'application': True,
}
