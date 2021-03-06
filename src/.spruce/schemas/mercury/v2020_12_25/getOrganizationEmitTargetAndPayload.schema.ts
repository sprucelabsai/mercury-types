import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getOrganizationTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getOrganizationTargetPayload.schema'

const getOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetAndPayloadSchema  = {
	id: 'getOrganizationEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: getOrganizationTargetPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getOrganizationEmitTargetAndPayloadSchema)

export default getOrganizationEmitTargetAndPayloadSchema
