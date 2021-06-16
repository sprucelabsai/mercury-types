import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import statusFlagsSchema_v2020_09_01 from '#spruce/schemas/mercury/v2020_09_01/statusFlags.schema'

const permissionDefaultsSchema: SpruceSchemas.Mercury.v2020_09_01.PermissionDefaultsSchema  = {
	id: 'permissionDefaults',
	version: 'v2020_09_01',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'skill': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** Owner. */
	            'owner': {
	                label: 'Owner',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_09_01,}
	            },
	            /** Group manager. */
	            'groupManager': {
	                label: 'Group manager',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_09_01,}
	            },
	            /** Manager. */
	            'manager': {
	                label: 'Manager',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_09_01,}
	            },
	            /** Teammate. */
	            'teammate': {
	                label: 'Teammate',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_09_01,}
	            },
	            /** Guest. */
	            'guest': {
	                label: 'Guest',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_09_01,}
	            },
	            /** Anonymous. */
	            'anonymous': {
	                label: 'Anonymous',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_09_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionDefaultsSchema)

export default permissionDefaultsSchema
