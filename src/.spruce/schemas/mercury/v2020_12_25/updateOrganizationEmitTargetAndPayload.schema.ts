import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateOrgEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateOrgEmitTarget.schema'
import updateOrgEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateOrgEmitPayload.schema'

const updateOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrganizationEmitTargetAndPayloadSchema  = {
	id: 'updateOrganizationEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateOrgEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updateOrgEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrganizationEmitTargetAndPayloadSchema)

export default updateOrganizationEmitTargetAndPayloadSchema
